import {Injectable} from 'angular2/core';

@Injectable()
export class SocketHandler {
    private socket;

    constructor() {
        this.socket = io.connect(window.location.origin, {
            path: window.location.pathname + 'socket.io'
        });
    }

    getSocket() {
        return this.socket;
    }
}