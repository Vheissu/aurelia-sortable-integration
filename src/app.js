export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia Starter';

        config.map([
            { route: [''], name: 'home', moduleId: 'dragdrop', nav: true, title: 'Home'}
        ]);

        this.router = router;
    }
}
