ng.module('smart-table', []).run(['$templateCache', function ($templateCache) {
	$templateCache.put('template/smart-table/pagination.html',
		'<nav ng-if="numPages && pages.length >= 2" aria-label="..." class="clearfix">' +
		'<a style="    padding: 6px 12px;\n' +
		'    border: 1px solid #d6d6d6;\n' +
		'    border-radius: 5px;\n' +
		'    margin-right: 15px;" ng-click="selectPage(1)">首页</a>' +
		'<ul class="pagination">' +
		'<li ng-repeat="page in pages" ng-class="{active: page==currentPage}">' +
		'<a href="javascript: void(0);" ng-click="selectPage(page)">{{page}}</a>' +
		'</li>' +
		'</ul>' +
		'<span style="margin-left: 15px;">' +
		'<a style="    padding: 6px 12px;\n' +
		'    border: 1px solid #d6d6d6;\n' +
		'    border-radius: 5px;\n' +
		'    margin-right: 10px;" ng-click="selectPage(numPages)">尾页</a>' +
		'<input type="text" ng-model="jumpPage" style="display: inline-block;\n' +
		'    width: 5rem;\n' +
		'    border: 1px solid rgb(214, 214, 214);\n' +
		'    border-radius: 5px;\n' +
		'    text-align: center;\n' +
		'    padding: 6px 12px;"><a style="margin-right: 10px;margin-left: 5px;cursor: pointer;" ng-click="selectPage(jumpPage)">跳转</a>' +
		'<span>共{{numPages}}页</span>' +
		'<span style="margin-left: 10px">{{stItemsByPage*currentPage||0}}/{{stItemsByPage*numPages}}条</span>' +
		'</span>' +
		'</nav>'
	);
}]);

