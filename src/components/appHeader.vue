<template>
  <div id="header">
        <div class="date-group">
            <div class="date-left date-date">{{currentDate}}</div>
            <div class="date-right">
                <div class="date-month">{{currentMonth }}</div>
                <div class="date-right-bottom">
                <div class="date-year">{{currentYear}}</div>
                <div class="date-time">
                    {{currentHour}} : {{currentMin}}
                </div>
            </div>
            
        </div>
      </div>
      <h1 class="title">Todo - List</h1>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            loop: '',
            date: '',
        }
    },
    computed: {
        currentYear() {
            return this.date.getFullYear();
        },
        currentHour() {
            return (this.date.getHours()) < 10 ? '0'+this.date.getHours() : this.date.getHours();
        },
        currentMin() {
            return (this.date.getMinutes()) < 10 ? '0'+this.date.getMinutes() : this.date.getMinutes();
        },
        currentDate() {
           return (this.date.getDate()) < 10 ? '0'+this.date.getDate() : this.date.getDate();
        },
        currentSecond() {
            return (this.date.getSeconds()) < 10 ? '0'+this.date.getSeconds() : this.date.getSeconds();
        },
        currentMonth() {
            return (this.date.getMonth() + 1 ) < 10 ? '0'+ (this.date.getMonth() + 1) : (this.date.getMonth() + 1);
    
        }
    },
    created(){
        this.date = new Date();
        this.start();
    },
    methods: {
        start(){
            this.loop = setInterval( () => {
                this.date = new Date();
            }, 1000)
        },
    }
    
}
</script>

<style>
    #header {
        margin-bottom: 1rem;
        background: var(--primary);
        padding: 2rem;
        color: var(--txt-main);
    }
    #header .title {
        margin-top: 1rem;
    }
    .date-group {
        display: flex;
        text-align: left;
        overflow: hidden;
        font-size: 24px;
        
    }
    .date-left {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .date-right {
        color: var(--primary-light);
        width: 100%;
    }
    .date-right-bottom {
        display: flex;
        justify-content: space-between;
    }
    .date-date {
        font-size: 36px;
        margin-right: .5rem;
        font-weight: bold;
    }
    
</style>