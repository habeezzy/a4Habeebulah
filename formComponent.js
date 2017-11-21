(function() {
  function formController() {
    controller: "formController as ctrl",
    template: `
  <input ng-model="">
  <input ng-model="">
  <input ng-model="">
  <input ng-model="">
  <button ng-click="$ctrl.newInfo();"> Read Story</button>
  <button ng-click="$ctrl.newInfo();"> Read Stor</button>

    `,
  };
  angular
  .module("StoryApp")
  .component("formComponent", formComponent);
})();
