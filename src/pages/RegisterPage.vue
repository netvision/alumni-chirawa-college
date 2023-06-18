<!-- src/pages/RegisterPage.vue -->

<template>
  <!-- Template by Joabson Arley
   https://github.com/Joabsonlg/quasar-template -->

  <q-card class="q-pa-xl" style="width: 60%">
    <div class="row">
      <div class="col-12 q-pa-md">
        <q-card-section>
          <div class="q-mb-xl">
            <div class="flex justify-center">
              <div
                class="text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka"
              >
                Registration Form
              </div>
            </div>
          </div>

          <q-form ref="form" class="q-gutter-md" @submit="submit">
            <q-input
              v-model="user.full_name"
              label="Full Name"
              name="Full Name"
            />
            <q-input
              v-model="user.fathers_name"
              label="Father's Name"
              name="Fathers Name"
            />
            <q-input
              filled
              v-model="user.dob"
              mask="date"
              label="Date of birth"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="user.dob">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-separator />
            <p>Family Details</p>
            <q-editor
              v-model="user.family_details"
              min-height="5rem"
              label="family Details"
            />
            <q-separator />
            <p>Year of Study</p>
            <div class="row">
              <div class="col">In School</div>
            </div>
            <div class="row">
              <div class="col">
                <q-input
                  v-model="user.school_from"
                  label="From"
                  name="school_from"
                />
              </div>
              <div class="col">
                <q-input v-model="user.school_to" label="To" name="school_to" />
              </div>
            </div>
            <div class="row">
              <div class="col">In College</div>
            </div>
            <div class="row">
              <div class="col">
                <q-input
                  v-model="user.college_from"
                  label="From"
                  name="college_from"
                />
              </div>
              <div class="col">
                <q-input
                  v-model="user.college_to"
                  label="To"
                  name="college_to"
                />
              </div>
            </div>
            <q-separator />
            <p>Present Status:</p>
            <q-input
              v-model="user.designation"
              label="Designation"
              name="designation"
            />
            <q-input
              v-model="user.company"
              label="Company/Institute"
              name="company"
            />
            <q-input v-model="user.email" label="Email" name="Email" />
            <q-input v-model="user.mobile" label="Mobile No." name="Mobile" />
            <p>Present Address</p>
            <q-editor v-model="user.address" min-height="5rem" />
            <q-separator />
            <p>Residence:</p>
            <q-input v-model="user.res_phone" label="Phone" name="res_phone" />
            <q-input
              v-model="user.res_mobile"
              label="Mobile No."
              name="res_obile"
            />
            <p>Residential Address</p>
            <q-editor v-model="user.res_address" min-height="5rem" />
            <div>
              <q-btn
                class="full-width fredoka"
                color="primary"
                label="Register"
                rounded
                type="submit"
              ></q-btn>
            </div>
          </q-form>
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { ref, reactive } from "vue";
import { db, auth } from "./../firebase/index";
//import register from "src/firebase/firebase-register";
import { useRouter } from "vue-router";
import { collection, addDoc } from "firebase/firestore";

const user = reactive({
  full_name: null,
  fathers_name: null,
  email: null,
  mobile: null,
  family_details: "",
  dob: null,
  school_from: null,
  school_to: null,
  college_from: null,
  college_to: null,
  res_address: "",
  address: "",
  is_varified: false,
  registration_date: new Date(),
  payment_info: {},
});

const form = ref(null);
const router = useRouter();

const submit = async () => {
  /*
  if (form.value.validate() && !!(await register(user))) {
    router.push("/app");
  }
  */
  if (form.value.validate()) {
    let member = await addDoc(collection(db, "members"), user);
    if (member.id) {
      router.push({ name: "payment", params: { id: member.id } });
    }
  }
};
</script>
