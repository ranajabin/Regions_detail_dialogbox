sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("fragmentproject.fragmentdialogproject.controller.View1", {
            onInit: function () {

                var regions = [
                    {
                        "RegionID": "01",
                        "RegionDescription": "Eastern"
                    },
                    {
                        "RegionID": "02",
                        "RegionDescription": "Northern"
                    },
                    {
                        "RegionID": "03",
                        "RegionDescription": "Western"
                    }
                ];

                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(regions);
                this.getView().setModel(oModel, "region");
            },

            onLoadDialog: function () {
                    var myView = this.getView();
                    if (!this.byId("idDialog")) {
                        Fragment.load({
                            name: "fragmentproject.fragmentdialogproject.fragments.fragment1",
                            controller: this,
                            id: myView.getId()
                        }).then(function (oDialog) {
                            myView.addDependent(oDialog);
                            oDialog.open();

                        });
                    } else {
                        this.byId("idDialog").open();
                    }
                },

                // var myView = this.getView();
                // var oDialog = myView.byId("idDialog");
                // if (!oDialog) {
                //     oDialog = sap.ui.xmlfragment(myView.getId(), "fragmentproject.fragmentdialogproject.fragments.fragment1", this);
                //     myView.addDependent(oDialog);
                //     oDialog.open();
                // } else {
                //     this.byId("idDialog").open();

                // } },

            cancelpress: function () {
                this.byId("idDialog").close();
            },

            okpress: function () {
                this.byId("idDialog").close();
            },
            onClick: function (oEvent) {
                var oSelectedItem = oEvent.oSource.mProperties;
                var oInput = this.byId("regnId");
                oInput.setValue(oSelectedItem.title);

                this.byId("idDialog").close();
            }
        });
    });
