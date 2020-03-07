<template>
    <div class="wizard">
        <section class="form">
            <div id="titulo">
                <span>{{title()}}:</span>
            </div>
            <div id="contenido">
                <div v-if="step==1">
                    <form>
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre">
                        <label for="paterno">Apellido Paterno:</label>
                        <input type="text" id="paterno">
                        <label for="materno">Apellido Materno:</label>
                        <input type="text" id="materno">
                        <label for="born">Fecha de Nacimiento:</label>
                        <input type="date" id="born">
                        <label for="estado">Estado de Nacimiento:</label>
                        <select name="estado" id="bestado">
                            <option value="nl">Nuevo Leon</option>
                            <option value="slp">San Luis Potosi</option>
                            <option value="gdl">Guadalajara</option>
                        </select>
                        <label for="ciudad">Ciudad de Nacimiento:</label>
                        <select name="ciudad" id="bciudad">
                            <option value="mty">Monterrey</option>
                            <option value="sn">San Nicolas</option>
                            <option value="esc">Escobedo</option>
                        </select>
                    </form>
                </div>
                <div v-if="step==2">
                    <form>
                        <label for="calle">Calle:</label>
                        <input type="text" id="calle">
                        <label for="colonia">Colonia:</label>
                        <input type="text" id="colonia">
                        <label for="num">Numero Externo:</label>
                        <input type="text" id="num">
                        <label for="estado">Estado:</label>
                        <select name="estado" id="estado">
                            <option value="nl">Nuevo Leon</option>
                            <option value="slp">San Luis Potosi</option>
                            <option value="gdl">Guadalajara</option>
                        </select>
                        <label for="ciudad">Ciudad:</label>
                        <select name="ciudad" id="ciudad">
                            <option value="mty">Monterrey</option>
                            <option value="sn">San Nicolas</option>
                            <option value="esc">Escobedo</option>
                        </select>
                        <br>
                        <label for="live">El niño vive con:</label><br>
                        <input type="radio" name="live" id="mama" value="Mama"><label for="mama">Mamá</label>
                        <input type="radio" name="live" id="papa" value="Papa"><label for="papa">Papá</label>
                        <input type="radio" name="live" id="both" value="Ambos"><label for="both">Ambos</label>
                        <br>
                        <label for="phone">Telefono de casa:</label>
                        <input type="number" id="phone" name="phone">
                    </form>
                </div>
                <div v-if="step==3">
                    <form>
                        <label for="parent">Parentesco:</label>
                        <select name="parent" id="parent">
                            <option value="mama">Mamá</option>
                            <option value="papa">Papá</option>
                            <option value="otro">Otro</option>
                        </select>
                        <label for="tnombre">Nombre(s): </label>
                        <input type="text" id="tnombre">
                        <label for="tpaterno">Apellido Paterno:</label>
                        <input type="text" id="tpaterno">
                        <label for="tmaterno">Apellido Materno</label>
                        <input type="text" id="tmaterno">
                        <label for="work">Empresa o Lugar de trabajo:</label>
                        <input type="text" id="work">
                        <label for="celwork">Telefono de Trabajo: </label>
                        <input type="number" id="celwork">
                        <label for="cel">Telefono celular:</label>
                        <input type="number" id="cel">
                    </form>
                </div>
                <div v-if="step==4">
                    <form>
                        <label for="in">Hora de Entrada</label>
                        <input type="text" id="in">
                        <label for="out">Hora de Salida</label>
                        <input type="text" id="in">
                        <label for="group">Grupo:</label>
                        <select name="group" id="group">
                            <option value="">Maternal</option>
                            <option value="">Preescolar</option>
                            <option value="">Lacante</option>
                        </select>
                        <label for="obs">Obervacion:</label>
                        <textarea name="obs" id="obs" cols="30" rows="10"></textarea>
                    </form>
                </div>
            </div>
            <div id="botones" :style="btnNext">
                <!-- <button v-if="step>=2 && step<=4" @click="backStep()" :class="btnStyle"><i class="fas fa-arrow-left"></i> Anterior</button> -->
                <v-btn v-if="step>=2 && step<=4" @click="backStep()" color="primary"><i class="fas fa-arrow-left"></i> Anterior</v-btn>
                <!-- <button v-if="step==3" @click="addTutor()"><i class="fas fa-plus"></i> Agregar Tutor</button> -->
                <v-btn v-if="step==3" @click="addTutor()" color="primary"><i class="fas fa-plus"></i> Agregar Tutor</v-btn>
                <v-btn v-if="step<4" @click="nextStep()" color="primary">Siguiente <i class="fas fa-arrow-right"></i></v-btn>
                <v-btn v-if="step==4" @click="save()" color="primary">Finalizar <i class="far fa-save"></i></v-btn>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name:'studentForm',
        components:{

        },
        data(){
            return{
                step: 1,
                btnNext:'',
                btnStyle:'btn btn-info'
            }
        },
        methods:{
            nextStep(){
                this.step = this.step + 1;
            },
            backStep(){
                this.step = this.step - 1;
            },
            save(){
                alert('Alumno Guardado');
            },
            addTutor(){
                alert('tutor agregado');
            },
            title(){
                switch (this.step) {
                    case 1:
                        this.btnNext = 'float:right;'
                         return 'Datos del niño(a)'   
                    break;
                    case 2:
                        this.btnNext = ''
                         return 'Direccion y telefono del niño(a)'   
                    break;
                    case 3:
                         return 'Datos de los tutores del niño(a)'   
                    break;
                    case 4:
                         return 'Datos de ingreso'   
                    break;
                    default:
                        return 'Inserte parametro';
                    break;
                }
            }
        },
        computed:{

        }
    }
</script>

<style lang="scss" scoped>
    .wizard{
        display: flex;
        width: 88vw;
        height: 92vh;
        justify-content: center;
        align-items: center;
        .form{
            height: 82vh;
            width: 82vw;
            border-radius: 15px;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            #titulo{
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
                height: 8vh;
                background-color: #1976D2;
                padding-left: 2vw;
                display: flex;
                align-items: center;
                span{
                    font-size: 30px;
                    color: #ffffff;
                }
            }
            #contenido{
                height: 60vh;
                margin: 2vh;
            }
            #botones{
                display: flex;
                align-items: center;
                height: 8vh;
                justify-content: space-between;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                button{
                    margin-right: 1vw;
                    margin-left: 1vw;
                    width: 12vw;
                }
            }
        }
    }
</style>