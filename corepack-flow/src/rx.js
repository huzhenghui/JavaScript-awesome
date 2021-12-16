// @flow
var Rx = require("rxjs");
var myObservable = new Rx.Subject();
myObservable.subscribe((value: string) => console.log(value));
myObservable.next('foo');