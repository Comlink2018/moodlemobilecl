// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

describe('User can see course final grade', function () {

    it('User can click course grade button', function (done) {
        return MM.loginAsStudent().then(function () {
            return MM.clickOnInSideMenu('Course overview');
        }).then(function () {
            return MM.clickOn('Psychology in Cinema');
        }).then(function () {
            browser.sleep(7500); // Wait for button css to render.
            return $('.secondary-buttons').click();
        }).then(function () {
            browser.sleep(5000); // Wait for button css to render.
            expect($('.popover-backdrop.active').isPresent()).toBeTruthy();
        }).then(function () {
            browser.sleep(5000);
            return element.all(by.css('[ng-click="contextMenuItemClicked($event, item)"]')).get(3).click();
        }).then(function () {
            expect(MM.getNavBar().getText()).toMatch('Grades');
            expect(MM.getView().getText()).toContain('Psychology in Cinema');
        }).then(function () {
            done();
        });
    });

    it('User can see main content of course grades', function (done) {
        return MM.loginAsStudent().then(function () {
            return MM.clickOnInSideMenu('Course overview');
        }).then(function () {
            return MM.clickOn('Psychology in Cinema');
        }).then(function () {
            browser.sleep(7500); // Wait for button css to render.
            return $('.secondary-buttons').click();
        }).then(function () {
            browser.sleep(7500); // Wait for button css to render.
            return element.all(by.css('[ng-click="contextMenuItemClicked($event, item)"]')).get(3).click();
        }).then(function () {
            expect(MM.getView().getText()).toContain('Analysis');
        }).then(function () {
            done();
        });
    });

    it('Check the expected final grades of course', function (done) {
        return MM.loginAsStudent().then(function () {
            return MM.clickOnInSideMenu('Course overview');
        }).then(function () {
            return MM.clickOn('Psychology in Cinema');
        }).then(function () {
            browser.sleep(7500); // Wait for button css to render.
            return $('.secondary-buttons').click();
        }).then(function () {
            browser.sleep(7500); // Wait for button css to render.
            return element.all(by.css('[ng-click="contextMenuItemClicked($event, item)"]')).get(3).click();
        }).then(function () {
            expect(MM.getView().getText()).toContain('Analysis total');
        }).then(function () {
            done();
        });
    });

});

