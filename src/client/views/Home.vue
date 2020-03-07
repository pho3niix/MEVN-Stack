<template>
    <div class="home">
        <h1>tabla de alumnos</h1>
        <div class="rows">
        </div>
    </div>
</template>

<script>
    import hello from '../components/Hello.vue';

    export default {
        name: 'home',
        components: {
            hello
        },
        data() {
            return {
                mensaje: 'App',
                name: '',
                last:'',
                age:'',
                group:'',
                headers:[
                    {
                        text:'Id',
                        align: 'center',
                        value: 'id'
                    },
                    {
                        text:'Nombre',
                        align: 'center',
                        value: 'namee'
                    },
                    {
                        text:'Edad',
                        align: 'center',
                        value: 'age'
                    },
                ],
                students:[]
            }
        },
        methods:{
            saveStudent(){
            this.students.push({
                name: this.name,
                last: this.last,
                age: this.age,
                group: this.group
            })
            this.name = ""
            this.last = ""
            this.age = ""
            this.group = ""
            // this.$refs.first.focus();
            }
        },
        mounted(){
            // this.$refs.first.focus();
            // this.axios.get('/api/users/test')
            // .then(res=>{
            //     this.students = res.data;
            // })
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .rows{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
            #table{
                margin-top: 6vh;
                margin-bottom: 5vh;
            }
        }
    }
</style>