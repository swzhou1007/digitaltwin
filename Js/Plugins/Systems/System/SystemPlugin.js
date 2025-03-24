! function() {
	window.Plugs = window.Plugs || {};

	if (window.Plugs.System) throw new Error('Plugs.System 类重复加载');
	var pescoSystem = window.Plugs.System = function() {
		this._masterElement = null;
	};

	var _pescoSystem = null;

	//获取实例对象
	pescoSystem.getInstance = function() {
		var rtn = null;
		if (_pescoSystem == null) {
			rtn = new window.Plugs.System();
			_pescoSystem = rtn;
		} else {
			rtn = _pescoSystem;
		}
		return rtn;
	};

	pescoSystem.isLoading = false;

	pescoSystem.tabData = {
		id: 'badff60a-2fca-4af3-bde4-2f8179fd5f6c',
		url: 'DevelopmentCase/DigitalTwin/Default.html',
		ifmid: 'badff60a-2fca-4af3-bde4-2f8179fd5f6c',
		text: '仿真系统',
		close: true,
		isShow: true,
		isFullScreen: false
	}
	pescoSystem.getInstance().systemIframeLoader = function(callBack) {
		pescoSystem.isLoading = true;
		// 判断GIS页面是否加载，已经加载则激活标签，没有则创建标签
		var marker = '系统',
			systemId = pescoSystem.tabData.id,
			allMenu = document.querySelectorAll('.pesco-menuitem'),
			allTabs = document.querySelectorAll('.pesco-menuTab'),
			allIframe = null,
			systemIframe = null,
			systemTab = null,
			systemMenu = null;


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
			setTimeout(function() {
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
					if (menuList[i].getAttribute('data-runclassname') == 'Plugs.System') {
						menuList[i].classList.add('pesco-actived');
					} else {
						menuList[i].classList.remove('pesco-actived');
					}
				}
			}, 200)
		}

		// 判断是否页面已经加载
		if (systemIframe.contentWindow.oDefault) {
			activeMenu();
			callBack(systemIframe);
			pescoSystem.isLoading = false;
		} else {
			allIframe = document.querySelectorAll('.LRADMS_iframe');

			for (var i = 0; i < allIframe.length; i++) {
				if (allIframe[i].getAttribute('id') == systemId) {
					systemIframe = allIframe[i];
					break;
				}
			}

			if (systemIframe) {
				if (systemIframe.attachEvent) {
					systemIframe.attachEvent("onload", function() {
						if (Plugs.System.isLoading) {
							activeMenu();
							callBack(systemIframe);
						}
						pescoSystem.isLoading = false;
					});
				} else {
					systemIframe.onload = function() {
						if (Plugs.System.isLoading) {
							activeMenu();
							callBack(systemIframe);
						}
						pescoSystem.isLoading = false;
					};
				}
			}
		}
	};

	// 方法名称 ChangeShowClick 在 default.js 文件中已经固定，不可随意更改
	pescoSystem.getInstance().ChangeShowClick = function() {
		// 加载GIS主页面
		$.navtab.addHomeTab(pescoSystem.tabData);

		// GIS页面方法调用
		Plugs.System.getInstance().systemIframeLoader(function(systemIframe) {
			// 调用当前iframe中的方法
			systemIframe.contentWindow.oDefault.createViewer();
			systemIframe.contentWindow.oDefault.clearAll();
			systemIframe.contentWindow.oSystem.restoreCameraEvents();
			systemIframe.contentWindow.oSystem.createFlyPanel();
			systemIframe.contentWindow.oSystem.getData();
		})
	};
}();
