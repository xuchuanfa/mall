module.exports = {  //修改config配置,给路径起别名
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets', 
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
			}
		}
	}
}