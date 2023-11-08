<template>
	<div id="app">
		<router-view />
		<Setings ref="setingsRef" />
		<Upgrade v-if="getVersion" />
		<Sponsors />
	</div>
</template>

<script>
import config from '/package.json';
import setIntroduction from '@/utils/setIconfont.js';
import { Local } from '@/utils/storage.js';
import Setings from '@/layout/navBars/topBar/setings.vue';
import Upgrade from '@/layout/upgrade/index.vue';
import Sponsors from '@/layout/sponsors/index.vue';
export default {
	name: 'App',
	components: { Setings, Upgrade, Sponsors },
	mounted() {
		this.initSetIconfont();
		this.openSetingsDrawer();
		this.getLayoutThemeConfig();
		this.initDB();
	},
	computed: {
		// 获取版本号
		getVersion() {
			let isVersion = false;
			if (this.$route.path !== '/login') {
				if ((Local.get('version') && Local.get('version') !== config.version) || !Local.get('version')) isVersion = true;
			}
			return isVersion;
		},
	},
	methods: {
		initDB() {
			this.$cookies.set('ip', '192.168.16.192', '0');
			this.$cookies.set('port', '7071', '0');
			this.$cookies.set('database', 'gis', '0');
			this.$cookies.set('scheme', 'test', '0');
			this.$cookies.set('username', 'admin', '0');
			this.$cookies.set('password', 'Aa121212', '0');

			this.$cookies.set('gs_ip', '192.168.16.162', '0');
			this.$cookies.set('gs_port', '7072', '0');
			this.$cookies.set('gs_username', 'PGadmin', '0');
			this.$cookies.set('gs_password', 'Bb232323', '0');
			this.$cookies.set('gs_workspace', 'GDSP', '0');
			this.$cookies.set('gs_datastore', 'test', '0');
		},
		// 设置初始化，防止刷新时恢复默认
		initSetIconfont() {
			// 设置批量第三方 icon 图标
			setIntroduction.cssCdn();
			// 设置批量第三方 js
			setIntroduction.jsCdn();
		},
		// 布局配置弹窗打开
		openSetingsDrawer() {
			this.bus.$on('openSetingsDrawer', () => {
				this.$refs.setingsRef.openDrawer();
			});
		},
		// 获取缓存中的布局配置
		getLayoutThemeConfig() {
			if (Local.get('themeConfigPrev')) {
				this.$store.dispatch('themeConfig/setThemeConfig', Local.get('themeConfigPrev'));
				document.documentElement.style.cssText = Local.get('themeConfigStyle');
			} else {
				Local.set('themeConfigPrev', this.$store.state.themeConfig.themeConfig);
			}
		},
	},
	watch: {
		// 监听路由的变化
		$route: {
			handler(to) {
				this.$nextTick(() => {
					let webTitle = '';
					let { globalTitle } = this.$store.state.themeConfig.themeConfig;
					to.path === '/login' ? (webTitle = to.meta.title) : (webTitle = this.$t(to.meta.title));
					document.title = `${webTitle} - ${globalTitle}` || globalTitle;
				});
			},
			deep: true,
			immediate: true,
		},
	},
	destroyed() {
		this.bus.$off('openSetingsDrawer');
	},
};
</script>
