<template>
	<GridLayout :height="height" :width="height">
		<RadRadialGauge>
			<RadialScale v-tkRadialGaugeScales startAngle="-90" sweepAngle="360">
				<ScaleStyle v-tkRadialScaleStyle ticksVisible="false" labelsVisible="false" lineThickness="0">
				</ScaleStyle>

				<RadialBarIndicator v-tkRadialScaleIndicators minimum="0" maximum="100">
					<BarIndicatorStyle v-tkRadialBarIndicatorStyle :fillColor="fillBackgroundColor" barWidth="0.25">
					</BarIndicatorStyle>
				</RadialBarIndicator>

				<RadialBarIndicator v-tkRadialScaleIndicators minimum="0" :maximum="value" isAnimated="true">
					<BarIndicatorStyle v-tkRadialBarIndicatorStyle :fillColor="fillColor" barWidth="0.25">
					</BarIndicatorStyle>
				</RadialBarIndicator>
			</RadialScale>
		</RadRadialGauge>
		<Label :text="text" :color="textColor" :fontSize="textSize" class="m-x-auto m-y-auto" :marginTop="offset"></Label>
	</GridLayout>
</template>

<script>
export default {
    props: {
        size: { default: 100 },
        progress: { default: 0 },
        offset: { default: 0 },
        textColor: { default: "#19191" },
        fillColor: { default: "#db4c40" },
        fillBackgroundColor: { default: "#faaea7" }
    },
    computed: {
        height() {
            return Math.min(this.size, 250);
        },
        value() {
            return Math.min(this.progress, 100);
        },
        text() {
            return `${this.value.toFixed()}`;
        },
        textSize() {
            return;
            this.height / 3.5;
        }
    }
};
</script>

<style>
</style>
