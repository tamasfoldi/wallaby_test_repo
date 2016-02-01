System.register(["angular2/testing", "./main.component"], function(exports_1) {
    var testing_1, main_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            }],
        execute: function() {
            testing_1.describe("Typewriting main tests", function () {
                var tcb;
                testing_1.beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (tcBuilder) {
                    tcb = tcBuilder;
                }));
                testing_1.it("should have one header", testing_1.injectAsync([], function () {
                    return tcb.createAsync(main_component_1.MainComponent)
                        .then(function (fixture) {
                        fixture.detectChanges();
                        var element = fixture.nativeElement;
                        testing_1.expect(element.querySelectorAll("tpw-header").length).toEqual(1);
                    });
                }));
                testing_1.it("should have one footer", testing_1.injectAsync([], function () {
                    return tcb.createAsync(main_component_1.MainComponent)
                        .then(function (fixture) {
                        fixture.detectChanges();
                        var element = fixture.nativeElement;
                        testing_1.expect(element.querySelectorAll("tpw-footer").length).toEqual(1);
                    });
                }));
                testing_1.it("should have one section", testing_1.injectAsync([], function () {
                    return tcb.createAsync(main_component_1.MainComponent)
                        .then(function (fixture) {
                        fixture.detectChanges();
                        var element = fixture.nativeElement;
                        testing_1.expect(element.querySelectorAll("section").length).toEqual(1);
                    });
                }));
                testing_1.it("should have one h1", testing_1.injectAsync([], function () {
                    return tcb.createAsync(main_component_1.MainComponent)
                        .then(function (fixture) {
                        fixture.detectChanges();
                        var element = fixture.nativeElement;
                        testing_1.expect(element.querySelectorAll("h1").length).toEqual(1);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=main.spec.js.map