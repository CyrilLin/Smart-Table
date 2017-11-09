ng.module('smart-table', []).run(['$templateCache', function ($templateCache) {
	$templateCache.put('template/smart-table/pagination.html',
		'<nav aria-label="..." class="clearfix">' +
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
		'<input type="number" ng-model="jumpPage" style="display: inline-block;width: 2rem;"><a style="margin-right: 10px;" ng-click="selectPage(jumpPage)">跳转</a>' +
		'<span>共{{numPages}}页</span>' +
		'</span>' +
		'</nav>'
	);
}]);

