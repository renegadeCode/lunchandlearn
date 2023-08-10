import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * SubscriptionManager implements the _ngUnsubscribe pattern more consistently and cleanly.
 * We often would make an _ngUnsubscribe Subject in a component and pipe all subscriptions to take until _ngUnsubscribe was called.
 * Then we would implement ngOnDestroy and call `_ngUnsubscribe.next(); _ngUnsubscribe.complete();`. This eventually led to repeated code all over the codebase,
 * also conflicting with a slightly older method of keeping track of each Subscription manually with a reference.
 * This class seeks to condense both of these methods into a single class.
 * 
 * ## Usage
 * To implement {@link SubscriptionManager}, create an instance of it and use {@link SubscriptionManager.sub} instead of subscribing to the observable directly.
 * The method will still return a reference to the Subscription if you need it. Although if you just need it to unsubscribe later, use {@link SubscriptionManager.unsub}
 * and pass in the observable you want to unsub from. Then, implement `ngOnDestroy()` if you haven't already and add {@link SubscriptionManager.unsubAll} to it.
 * Implementing ngOnDestroy is not necessary if this is being used in a Service or Model.
 * 
 * ## Example
 * ```ts
 * @Component()
 * export class MyComponent implements OnInit, OnDestroy {
 * 		private _subManager: SubscriptionManager = new SubscriptionManager();
 * 
 * 		public ngOnInit(): void {
 * 			this._subManager.sub(this._someObservable, () => console.log('observable called'));
 * 		}
 * 
 *		public ngOnDestroy(): void {
 * 			this._subManager.unsubAll();
 * 		}
 * }
 * ```
 * 
 */
export class SubscriptionManager {

	/**
	 * Keeps track of subscriptions per Observable. The idea of the {@link SubscriptionManager} is that there never more than one sub per observable at any time.
	 */
	private _subscriptions: Map<Observable<any>, Subscription> = new Map();
	private _ngUnsubscribe: Subject<any> = new Subject();

	/**
	 * Subscribe to an observable and ensure this is the only subscription to the observable for this instance.
	 * @param observable The observable to subscribe to.
	 * @param next The function to call when the observable is called.
	 * @param error The function to call when the observable reports an error.
	 * @param complete The function to call when the observable is closed.
	 * @returns The resulting subscription from the observable.
	 */
	public sub<T>(observable: Observable<T>, next?: (arg0: T) => void, error?: (arg0: T) => void, complete?: () => void): Subscription {
		if (this._subscriptions.has(observable) && !this._subscriptions?.get(observable)?.closed) {
			return this._subscriptions.get(observable) as Subscription;
		}

		const sub: Subscription = observable.pipe(takeUntil(this._ngUnsubscribe)).subscribe({next: next, error: error, complete: complete});
		this._subscriptions.set(observable, sub);
		return sub;
	}

	/**
	 * Kills all subscriptions so that garbage collection can free up unneeded space.
	 * This should be called in `ngOnDestroy()`
	 */
	public unsubAll(): void {
		this._ngUnsubscribe.next(true);
		this._ngUnsubscribe.complete();
		this._subscriptions.clear();
	}

	/**
	 * Kill the subscription for an observable.
	 * @param observable The observable to unsubscribe from.
	 */
	public unsub<T>(observable: Observable<T>): void {
		if (this._subscriptions.has(observable)) {
			this._subscriptions.get(observable)?.unsubscribe();
		}
	}

}
