sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function (Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.UsuarioList", {

		onInit : function () {
			var oViewModel = new JSONModel({
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFiltrarUsuarios : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Nome", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("listaDeUsuarios");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});