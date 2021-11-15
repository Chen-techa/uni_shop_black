// 定义公共请求接口的前缀
const BASE_URL = 'http://127.0.0.1:8082/api'


// 定义并导出一个发送请求的方法，并向其中传递一个参数options）作为发送请求的参数，可定义data，method，url的后缀
export const myRequest = (options) => {
	// 处理异步的promise的处理方法
	return new Promise((resolve,reject)=>{
		// 封装发送的请求
		uni.request({
			// url的地址分为两部分，前段部分即为定义的公共请求头（BASE_URL）后半部分（options.url）是用户发送请求的名称或者地址，两种合并成一个完整的apiurl
			url:BASE_URL+options.url,
			// 请求的方法
			method:options.method || 'GET',
			// 请求的数据
			data:options.data || {},
			// 请求成功之后返回一个res值用来存储发送请求的数据
			success:(res)=>{
				if(res.data.status !== 0){
					return uni.showToast({
						title:'获取数据成功'
					})
				}
				reslove(res)
			},
			// 请求失败之后的方法定义
			fail: (err) => {
				uni.showToast({
					title:'获取数据失败'
				})
				reject(err)
			}
		})
	})
}