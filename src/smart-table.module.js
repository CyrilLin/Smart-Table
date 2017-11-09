ng.module('smart-table', []).run(['$templateCache', function ($templateCache) {
	$templateCache.put('template/smart-table/pagination.html',
		'<nav aria-label="..." class="clearfix">' +
				'<a ng-click="selectPage(1)" class="pull-left">首页</a>' +
				'<ul class="pagination">' +
					'<li ng-repeat="page in pages" ng-class="{active: page==currentPage}">' +
						'<a href="javascript: void(0);" ng-click="selectPage(page)">{{page}}</a>' +
					'</li>' +
				'</ul>' +
			'<span class="pull-right">' +
				'<a ng-click="selectPage(numPages)">尾页</a>' +
				'<span>共{{numberOfPages}}页</span>' +
			'</span>' +
		'</nav>'
	);
}]);

