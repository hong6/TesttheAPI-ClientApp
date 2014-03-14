directory.Employee = Backbone.Model.extend({

    urlRoot:"/directory-rest-php/employees",
//    urlRoot:"http://localhost:3000/employees",

    initialize:function () {
        this.reports = new directory.EmployeeCollection();
        this.reports.url = this.urlRoot + "/" + this.id + "/reports";
    }

});

directory.EmployeeCollection = Backbone.Collection.extend({

    model: directory.Employee,

    url:"/directory-rest-php/employees"
//    url:"http://localhost:3000/employees"

});