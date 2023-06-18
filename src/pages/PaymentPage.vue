<template>
  <q-page>
    <div class="flex flex-center q-pa-md">
      <h3 class="text-h5">
        Thank you, {{ member.full_name }} for registration here.
      </h3>
      <p class="text-h6">
        Please pay membership fee of amount
        <span class="text-bold">&#8377;2100/-</span>. Our Bank account details
        are as follows:
      </p>
      <p>
        M/s. CHIRAWA COLLEGE ALUMNI SAMITI<br />
        SB A/c No. 25004101110044888<br />
        JHUNJHUNU KENDRIYA SAHKARI BANK LTD.<br />
        CHIRAWA - 333026<br />
        IFSC Code: RSCB0025004
      </p>
      <p>
        Please send the scanned image of deposite reciept or screenshot of the
        payment at the email id: <strong>alumni@chirawacollege.in</strong>,
        quoting your unique id: <strong>{{ member.id }}</strong
        >. Thank you.
      </p>
    </div>
  </q-page>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { db, auth } from "./../firebase/index";
import { doc, getDoc } from "firebase/firestore";
const route = useRoute();

const member = ref({});
onMounted(async () => {
  const memberRef = doc(db, "members", route.params.id);
  const memberSnap = await getDoc(memberRef);
  if (memberSnap.exists()) {
    member.value = { id: memberSnap.id, ...memberSnap.data() };
    console.log(memberSnap.data());
  }
});
</script>
