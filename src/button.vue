<template>
	<button class='s-button' :class="{[`icon-${iconPosition}`]: true}"
		@click="$emit('click')">
		<s-icon class="icon" v-if="icon && !loading" :name="icon"></s-icon>
		<s-icon class="icon loading" v-if="loading" name="loading"></s-icon>
		<div class="content ">
			<slot></slot>
		</div>
	</button>
</template>

<script>
	import Icon from './icon';
	export default {
		name: 'ShanyaodanButton',
		components: {
			's-icon': Icon,
		},
		// props: ['icon', 'iconPosition']
		props: {
			icon: {},
			loading: {
				type: Boolean,
				default: false
			},
			iconPosition: {
				type: String,
				default: 'left',
				validator(value) {
					return value === 'left' || value === 'right';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.s-button {

		/*loading动画*/
		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}

		/*解决居中*/
		display: inline-flex;
		justify-content: center;
		align-items: center;
		/* inline-flex 造成上下不对齐 所有inline元素都有此问题解决办法*/
		vertical-align: middle;

		font-size: var(--font-size);
		height: var(--button-height);
		padding: 0 1em;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background: var(--button-bg);

		&:hover {
			border-color: var(--border-color-hover);
		}

		&:active {
			background-color: var(--button-active-bg);
		}

		&:focus {
			outline: none;
		}

		/*css控制排序*/

		> .icon {
			order: 1;
			margin-right: .3em;
		}
		> .content {
			order: 2;
		}

		&.icon-right {
			> .icon {
				order: 2;
				margin-left: .3em;
				margin-right: 0;
			}
			> .content {
				order: 1;
			}
		}

		.loading {
			animation: spin 2s infinite linear; /* spin动画 2s 无限 线性 滚动*/
		}
	}
</style>
