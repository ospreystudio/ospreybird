<template>
<div>
	      <Callback 
                        v-if="isInfoPopupVisible"
                        @closePopup="closeInfoPopup"
                    /> 

	<div id="contact-form" class="contact-form">
		<h1 class="contact-form_title">Contact Form</h1>
		<div class="separator"></div>
		<form class="form" @submit.prevent="saveData">
			<input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
			<input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
            <input required name="phone" v-model="contact.phone" placeholder="Phone number" type="phone" autocomplete="off">
			<textarea required name="message" v-model="contact.message" rows="4" placeholder="Message" autocomplete="off"></textarea>

			<div >
			<button class="button">
			<div >	 
				<img class="upload" src="@/img/upload.png"></div>	
    			Upload
			</button> </div>
            
		   <button class="button">Send</button>
		</form>
	</div>

</div>
</template>

<script>
import Callback from '../UI/Callback.vue';

// import db from '@/firebase/init'
// import firebase from 'firebase'
export default {
	components: {
		Callback,
Callback
	},
    data() {
        return {
            contact: {
			name: '',
			email: '',
            message: '',
            phone:''
			},
			  showModal: true,
              isInfoPopupVisible: false,
              message: 'Hello, can I help you ?'

        }
    },
	methods: {

		closeInfoPopup() {
			this.isInfoPopupVisible = false;
			this.$router.push({ name: 'Main' })
        },


		saveData() {
			db.collection('contacts').add(this.contact)
			.then((docRef) => {
			
				console.log("Document written with ID: ", docRef.id);
				this.reset();
				
        setTimeout(() => {
            this.isInfoPopupVisible = true;
        }, 1000);

				// this.$router.push({name: 'Main' })
			})
			.catch(function(error) {
					console.error("Error adding document: ", error);
			});
		}, 	reset() {
			Object.assign(this.$data, this.$options.data.apply(this))
		}
	}	
}
</script>


<style lang="css" scoped>
body {
	background: #f1f1f1;
	font-family: 'Roboto', sans-serif;
}

  .upload {
	  margin-right: 20px;
  }
				

.contact-form {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
	font-family: 16px;
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
  	border-radius: 20px;
    box-shadow: 0 5px 70px rgba(0, 0, 8, .3);
  	background: rgba(172, 126, 126, 0.1);

}

.contact-form .separator {
	border-bottom: solid 1px #ccc;
	margin-bottom: 15px;
}

.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}

.contact-form_title {
	color: white;
      margin: 15px;
    font-size: 28px;
    
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form input[type="phone"],
.contact-form textarea {
	border: solid 1px #e8e8e8;
	font-family: 'Roboto', sans-serif;
	padding: 10px 7px 5px 7px;
    margin: 15px;
	outline: none;
}


.contact-form textarea {
	resize: none;
}

.contact-form .button {
    background: #036CB7;
	border: solid 1px #036CB7;
	color: white;
	cursor: pointer;
	padding: 10px 50px;
    text-align: center;
      margin: 15px;
    text-transform: uppercase;
   
}

.contact-form .button:hover {
	background: #02528A;
	border: solid 1px #02528A;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form input[type="phone"],
.contact-form textarea,
.contact-form .button {
	font-size: 15px;
	border-radius: 15px
}
.button {
    --background: #275EFE;
    --background-hover: #2456E8;
    --text: #fff;
    --icon: #fff;
    display: flex;
    outline: none;
    cursor: pointer;
    border: 0;

    min-width: 113px;
    padding: 8px 20px 8px 12px;
    border-radius: 9px;
    line-height: 24px;
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    color: var(--text);
    background: var(--b, var(--background));
    transition: transform .3s, background .4s;
    transform: scale(var(--scale, 1)) translateZ(0);
    &:active {
        --scale: .95;
    }
    &:hover {
        --b: var(--background-hover);
    }
 
    
}


</style>