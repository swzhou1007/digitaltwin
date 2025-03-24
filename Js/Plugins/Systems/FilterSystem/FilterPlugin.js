! function () {
	window.Plugs = window.Plugs || {};

	if (window.Plugs.FilterSystem) throw new Error('Plugs.FilterSystem 类重复加载');
	var pescoFilterSystem = window.Plugs.FilterSystem = function () {
		this._masterElement = null;
	};

	var _pescoFilterSystem = null;

	//获取实例对象
	pescoFilterSystem.getInstance = function () {
		var rtn = null;
		if (_pescoFilterSystem == null) {
			rtn = new window.Plugs.FilterSystem();
			_pescoFilterSystem = rtn;
		} else {
			rtn = _pescoFilterSystem;
		}
		return rtn;
	};


	pescoFilterSystem.getInstance().systemIframeLoader = function (callBack) {
		Plugs.System.isLoading = false;
		// 判断GIS页面是否加载，已经加载则激活标签，没有则创建标签
		var marker = '仿真系统',
			systemId = '',
			allMenu = document.querySelectorAll('.pesco-menuitem'),
			allTabs = document.querySelectorAll('.pesco-menuTab'),
			allIframe = null,
			systemIframe = null,
			systemTab = null,
			systemMenu = null;

		for (var i = 0; i < allMenu.length; i++) {
			if (allMenu[i].innerText == marker) {
				systemId = allMenu[i].getAttribute('data-id');
				systemMenu = allMenu[i];
				break;
			}
		}

		if (systemId == "") {
			console.log('' + marker + ' 菜单未配置！');
			return false;
		}

		for (var i = 0; i < allTabs.length; i++) {
			if (allTabs[i].getAttribute('data-menuid') == systemId) {
				systemTab = allTabs[i];
				break;
			}
		}

		allIframe = document.querySelectorAll('.LRADMS_iframe');
		for (var i = 0; i < allIframe.length; i++) {
			if (allIframe[i].getAttribute('id') == systemId) {
				systemIframe = allIframe[i];
				break;
			}
		}

		function activeMenu() {
			setTimeout(function () {
				allTabs = document.querySelectorAll('.pesco-menuTab');
				for (var i = 0; i < allTabs.length; i++) {
					if (allTabs[i].getAttribute('data-menuid') == systemId) {
						systemTab = allTabs[i];
						break;
					}
				}
				systemTab.classList.add('active');

				var menuList = document.querySelectorAll('.pesco-menuitem');
				for (var i = 0; i < menuList.length; i++) {
					if (menuList[i].getAttribute('data-runclassname') == 'Plugs.FilterSystem') {
						menuList[i].classList.add('pesco-actived');
					} else {
						menuList[i].classList.remove('pesco-actived');
					}
				}
			}, 200)
		}

		if (systemTab) {
			if (document.all) {
				systemTab.click();
			} else {
				var e = document.createEvent("MouseEvents");
				e.initEvent("click", true, true);
				systemTab.dispatchEvent(e);
			}

			if (!!systemIframe.contentWindow.oDefault) {
				activeMenu();
				callBack(systemIframe);
			} else {
				Global.dialogMsg({
					msg: '地图加载中，稍后再试',
					type:0
				})
				return;
			}
			
		} else {
			if (systemMenu) {
				// 判断页面是否为插件（为插件则直接运行--解决菜单选中问题--非插件模式遵循平台菜单规则）
				if (systemMenu.getAttribute('data-href').split('.')[1] == 'js') {
					var runClassName = systemMenu.getAttribute('data-runClassName');
					if (runClassName.length > 0) {
						eval(runClassName).getInstance().ChangeShowClick(e);
					}
				} else {
					if (document.all) {
						systemMenu.click();
					} else {
						var e = document.createEvent("MouseEvents");
						e.initEvent("click", true, true);
						systemMenu.dispatchEvent(e);
					}
				}
				allIframe = document.querySelectorAll('.LRADMS_iframe');

				for (var i = 0; i < allIframe.length; i++) {
					if (allIframe[i].getAttribute('id') == systemId) {
						systemIframe = allIframe[i];
						break;
					}
				}

				if (systemIframe) {
					if (systemIframe.attachEvent) {
						systemIframe.attachEvent("onload", function () {
							activeMenu();
							callBack(systemIframe);
						});
					} else {
						systemIframe.onload = function () {
							activeMenu();
							callBack(systemIframe);
						};
					}
				}

			} else {
				console.log('' + marker + ' 菜单未配置！');
			}

		}
	};

	// 方法名称 ChangeShowClick 在 default.js 文件中已经固定，不可随意更改
	pescoFilterSystem.getInstance().ChangeShowClick = function () {
		//点击菜单后会自动执行此方法
		Plugs.FilterSystem.getInstance().systemIframeLoader(function (systemIframe) {
			// 调用当前iframe中的方法
			// debugger
			systemIframe.contentWindow.oDefault.clearAll();
			systemIframe.contentWindow.oFilter.showFilterSystem();
		})
	};
}();