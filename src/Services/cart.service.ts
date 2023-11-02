import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private afterItemAdd$$ = new BehaviorSubject(null);
    private cartSummery$$ = new BehaviorSubject(null);

    get afterItemAddClick$(): Observable<any> {
        return this.afterItemAdd$$.asObservable();
    }

    get cartSummery$(): Observable<any> {
        return this.cartSummery$$.asObservable();
    }

    addItemToCart(item: any) {
        this.afterItemAdd$$.next(item);
    }

    updateCartSummery(data : any) {
        this.cartSummery$$.next(data)
    }
}