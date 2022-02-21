'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bob-tours documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-91a522a72d21d3a228886d5dc7edf3dee418a90b2dc2f84a7139ecf1bb21b156a468b91c520372dd1399b2056f4c2961a32277441f2546cd9013d64df4831754"' : 'data-target="#xs-components-links-module-AppModule-91a522a72d21d3a228886d5dc7edf3dee418a90b2dc2f84a7139ecf1bb21b156a468b91c520372dd1399b2056f4c2961a32277441f2546cd9013d64df4831754"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-91a522a72d21d3a228886d5dc7edf3dee418a90b2dc2f84a7139ecf1bb21b156a468b91c520372dd1399b2056f4c2961a32277441f2546cd9013d64df4831754"' :
                                            'id="xs-components-links-module-AppModule-91a522a72d21d3a228886d5dc7edf3dee418a90b2dc2f84a7139ecf1bb21b156a468b91c520372dd1399b2056f4c2961a32277441f2546cd9013d64df4831754"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DetailsPageModule.html" data-type="entity-link" >DetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailsPageModule-a495dbf8d63529be5555e2f21972ebaffb0222b4304ae19326d10d8857788b4e07dbcfc719ecb835f1c10f64691580bb229a44b91e805a25144efbf136de3e22"' : 'data-target="#xs-components-links-module-DetailsPageModule-a495dbf8d63529be5555e2f21972ebaffb0222b4304ae19326d10d8857788b4e07dbcfc719ecb835f1c10f64691580bb229a44b91e805a25144efbf136de3e22"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailsPageModule-a495dbf8d63529be5555e2f21972ebaffb0222b4304ae19326d10d8857788b4e07dbcfc719ecb835f1c10f64691580bb229a44b91e805a25144efbf136de3e22"' :
                                            'id="xs-components-links-module-DetailsPageModule-a495dbf8d63529be5555e2f21972ebaffb0222b4304ae19326d10d8857788b4e07dbcfc719ecb835f1c10f64691580bb229a44b91e805a25144efbf136de3e22"' }>
                                            <li class="link">
                                                <a href="components/DetailsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailsPageRoutingModule.html" data-type="entity-link" >DetailsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesPageModule.html" data-type="entity-link" >FavoritesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FavoritesPageModule-1893cae7af0c93cfd88e34d95c5b30511d418666e664edacecd1ec4cec46ed9db46bf1492042acf6469c5da281bf626a42c0fb45bb8cea1bf6bdac7e5a2a40e4"' : 'data-target="#xs-components-links-module-FavoritesPageModule-1893cae7af0c93cfd88e34d95c5b30511d418666e664edacecd1ec4cec46ed9db46bf1492042acf6469c5da281bf626a42c0fb45bb8cea1bf6bdac7e5a2a40e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavoritesPageModule-1893cae7af0c93cfd88e34d95c5b30511d418666e664edacecd1ec4cec46ed9db46bf1492042acf6469c5da281bf626a42c0fb45bb8cea1bf6bdac7e5a2a40e4"' :
                                            'id="xs-components-links-module-FavoritesPageModule-1893cae7af0c93cfd88e34d95c5b30511d418666e664edacecd1ec4cec46ed9db46bf1492042acf6469c5da281bf626a42c0fb45bb8cea1bf6bdac7e5a2a40e4"' }>
                                            <li class="link">
                                                <a href="components/FavoritesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavoritesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesPageRoutingModule.html" data-type="entity-link" >FavoritesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListPageModule.html" data-type="entity-link" >ListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListPageModule-f2e1586fe95da9978b14ba1673eb4a6cca68af0a0a4d526c2a1cdd284d8741993a0a0edc73b766875a641c92117fb058e3303a0327451ed5a5daf84fdf611da2"' : 'data-target="#xs-components-links-module-ListPageModule-f2e1586fe95da9978b14ba1673eb4a6cca68af0a0a4d526c2a1cdd284d8741993a0a0edc73b766875a641c92117fb058e3303a0327451ed5a5daf84fdf611da2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListPageModule-f2e1586fe95da9978b14ba1673eb4a6cca68af0a0a4d526c2a1cdd284d8741993a0a0edc73b766875a641c92117fb058e3303a0327451ed5a5daf84fdf611da2"' :
                                            'id="xs-components-links-module-ListPageModule-f2e1586fe95da9978b14ba1673eb4a6cca68af0a0a4d526c2a1cdd284d8741993a0a0edc73b766875a641c92117fb058e3303a0327451ed5a5daf84fdf611da2"' }>
                                            <li class="link">
                                                <a href="components/ListPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListPageRoutingModule.html" data-type="entity-link" >ListPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegionsPageModule.html" data-type="entity-link" >RegionsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegionsPageModule-3cd9fff0f3e82a5f623f689c6cf04142234751d0d40e145ac897ff7f90119976ede10f10fe71b202445c88bf8b5157d872ea2a73c3f6ba01c4b7e51dfaadd94c"' : 'data-target="#xs-components-links-module-RegionsPageModule-3cd9fff0f3e82a5f623f689c6cf04142234751d0d40e145ac897ff7f90119976ede10f10fe71b202445c88bf8b5157d872ea2a73c3f6ba01c4b7e51dfaadd94c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegionsPageModule-3cd9fff0f3e82a5f623f689c6cf04142234751d0d40e145ac897ff7f90119976ede10f10fe71b202445c88bf8b5157d872ea2a73c3f6ba01c4b7e51dfaadd94c"' :
                                            'id="xs-components-links-module-RegionsPageModule-3cd9fff0f3e82a5f623f689c6cf04142234751d0d40e145ac897ff7f90119976ede10f10fe71b202445c88bf8b5157d872ea2a73c3f6ba01c4b7e51dfaadd94c"' }>
                                            <li class="link">
                                                <a href="components/RegionsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegionsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegionsPageRoutingModule.html" data-type="entity-link" >RegionsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RequestPageModule.html" data-type="entity-link" >RequestPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RequestPageModule-82f01cfd32c8195d1a8250b6aa58d44a25dcf313d5acee43d22022306dbbba932125cb761d99b7b4e27cfb323d469fbb9f9fef01d28d24362ea8702b7ee20b5c"' : 'data-target="#xs-components-links-module-RequestPageModule-82f01cfd32c8195d1a8250b6aa58d44a25dcf313d5acee43d22022306dbbba932125cb761d99b7b4e27cfb323d469fbb9f9fef01d28d24362ea8702b7ee20b5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RequestPageModule-82f01cfd32c8195d1a8250b6aa58d44a25dcf313d5acee43d22022306dbbba932125cb761d99b7b4e27cfb323d469fbb9f9fef01d28d24362ea8702b7ee20b5c"' :
                                            'id="xs-components-links-module-RequestPageModule-82f01cfd32c8195d1a8250b6aa58d44a25dcf313d5acee43d22022306dbbba932125cb761d99b7b4e27cfb323d469fbb9f9fef01d28d24362ea8702b7ee20b5c"' }>
                                            <li class="link">
                                                <a href="components/RequestPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RequestPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequestPageRoutingModule.html" data-type="entity-link" >RequestPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TourTypesPageModule.html" data-type="entity-link" >TourTypesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TourTypesPageModule-9a4eaeaa7b26c1804ff2ac3dd715fd612126aafafe962657b54eaabd4aa3b57b7fbac2b16c07fdf7517438ed407eb9764fcf35d346f1e6ee0d12804ca4ce1b3a"' : 'data-target="#xs-components-links-module-TourTypesPageModule-9a4eaeaa7b26c1804ff2ac3dd715fd612126aafafe962657b54eaabd4aa3b57b7fbac2b16c07fdf7517438ed407eb9764fcf35d346f1e6ee0d12804ca4ce1b3a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TourTypesPageModule-9a4eaeaa7b26c1804ff2ac3dd715fd612126aafafe962657b54eaabd4aa3b57b7fbac2b16c07fdf7517438ed407eb9764fcf35d346f1e6ee0d12804ca4ce1b3a"' :
                                            'id="xs-components-links-module-TourTypesPageModule-9a4eaeaa7b26c1804ff2ac3dd715fd612126aafafe962657b54eaabd4aa3b57b7fbac2b16c07fdf7517438ed407eb9764fcf35d346f1e6ee0d12804ca4ce1b3a"' }>
                                            <li class="link">
                                                <a href="components/TourTypesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TourTypesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TourTypesPageRoutingModule.html" data-type="entity-link" >TourTypesPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});