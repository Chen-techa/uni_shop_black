<template>
	<view class="content">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图
				swiper:[]
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			getSwipers(){
				uni.request({
					url:'http://127.0.0.1:8082/api/getlunbo',
					success: (res) => {
						if(res.data.status !== 0){
							return uni.showToast({
								title:"获取轮播图数据失败"
							})
						}
						this.swiper = res.data.message
					}
				})
			}
		}
	}
</script>

<style>
	
</style>
