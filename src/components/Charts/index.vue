<template>
    <div class="chart_container">
        <div ref="chart" class="chart" />
        <slot />
        <template v-if="withDialog">
            <el-button
                type="primary"
                class="upper-right"
                @click="dialogvisible = true"
            >
                {{ buttonText }}
            </el-button>
            <el-dialog
                :visible.sync="dialogvisible"
                :title="dialogTitle"
                :width="dialogwidth"
                :fullscreen="dialogFullscreen"
                append-to-body
            >
                <template slot="default">
                    <slot name="dialog" />
                </template>
                <template slot="footer">
                    <el-button @click="dialogvisible = false">
                        取消
                    </el-button>
                    <el-button type="primary" @click="handleConfirncIick">
                        确定
                    </el-button>
                </template>
            </el-dialog>
        </template>
    </div>
</template>

<script>
    import { isEmpty, isFunction } from 'lodash'
    import * as echarts from 'echarts'

    const instances = new WeakMap()

    export default {
        name: 'Charts',
        props: {
        option: {
            type: Object,
            required: true,
        eventHandler: {
            type: Object,
            default: () => {}
        }
        buttonText:
type:String,
default:
dialogTitlett
type: String,
default:
dialogwidth:(
type: String.
default:'50%'
dialogFullscreen:
type: Boolean,
default: false
data()
return {
resizeobserver: null,
dialogvisible: false
computed:(
withDialog(){
return lisEmpty(this.$slots['dialog'])
watch: {
option:
deep: true,
handler() 1
this.setchartoptions()
mounted(){
this.initchart()
beforeDestroy() {
this.clearcache
methods;1
handleconfirnclick()
this.dlalogVisible = false
this.$amit{'confirmClick")
getchartInstance()
return instances-get(this.$refs.chart)
initchart() f
this.clearcache()
11根据全局主题选择是否启用暗色横式
const chartElement = this.$refs.chart
if (this.isDarkMode){
instances.set(chartElement, echarts.init(chartElement, 'dark'))
3 else {
instances.set(chartElement,echarts.init(chartElement, 'customedTheme "))
1/自适应
const Resizeobserver = window.Resize0bserver
this.resize0bserver=new Resize0bserver(()=》{this.getChartInstance().resize() })
this.resize0bserver.observe(chartElement)
setchartoptions() {
const chartInstance = this.getChartInstance()chartInstance.setoption(this.option, true)1/设置事件处理器
Object.keys(this.eventHandler).forEach(eventName =>{
const handler = this.eventHandler[eventName]
if (isFunction(handler)){
chartInstance.on(eventNane, handler)
else {
throw new Error( Event handler for event "${eventNane]" is not a function"y
clearCache() I
const chartinstance - this.getchartInstance()
1f(chartInstance && IchartInstance.isDisposed())t
chartInstance.dispose()
1f(this.resize0bserver){
this.resize0bserver.disconnect()
</script>
<style 1ang-"scss" scoped>
.chart_container (
position; relative,
.upper-right 1
position: absolutes
top: 10px;
right: 10px;
.chart_container,.chart {
width: 109%:
}