<template>
    <h3>Component A</h3>
    <ComponentB :users="users" @sendMessage="fnReceiveSendMessage" />
    <Swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
        <SwiperSlide>
            <img src="../../public/favicon.ico" alt="">
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/favicon.ico" alt="">
        </SwiperSlide>
        <SwiperSlide>
            <img src="../../public/favicon.ico" alt="">
        </SwiperSlide>
        ...
    </Swiper>
</template>

<script>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import ComponentB from './ComponentB.vue';

export default {
    name: 'ComponentA',
    components: { ComponentB, Swiper, SwiperSlide, },
    data() {
        return {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            users: [{
                username: '张三',
                age: 18,
            }, {
                username: '李四',
                age: 19,
            }, {
                username: '王五',
                age: 20,
            }],
        };
    },

    methods: {
        fnReceiveSendMessage(data) {
            console.log('接收来自B组件的消息：', data);
        },
        onSwiper(swiper) {
            console.log('swiper', swiper);
        },
        onSlideChange(swiper) {
            console.log('swiper', swiper);
        },
    },

}
</script>