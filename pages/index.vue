<template>
  <div class="flex justify-center items-center flex-col gap-5 px-10 mt-5 pt-5 pb-10">
    <div class="w-full">
      <label for="" class="text-primary-gray !mb-3"> Main category <span class="text-primary-color">*</span> </label>
      <v-autocomplete
        clearable
        chips
        label="Main category"
        variant="solo"
        v-model="FormData.catg"
        :error-messages="FormData$.catg.$errors.map((e) => e.$message)"
        @input="FormData$.catg.$touch"
        @blur="FormData$.catg.$touch"
      ></v-autocomplete>
    </div>
    <div class="w-full">
      <label for="" class="text-primary-gray !mb-3"> Sup category <span class="text-primary-color">*</span> </label>
      <v-autocomplete
        clearable
        chips
        label="Sup category"
        variant="solo"
        v-model="FormData.subCatg"
        :error-messages="FormData$.subCatg.$errors.map((e) => e.$message)"
        @input="FormData$.subCatg.$touch"
        @blur="FormData$.subCatg.$touch"
      ></v-autocomplete>
    </div>
    <div class="w-full">
      <label for="" class="text-primary-gray !mb-3"> Process type  </label>
      <v-autocomplete
        clearable
        chips
        label="Process type"
        variant="solo"
        v-model="FormData.process"
        hide-details=""
        class="mb-1"
      ></v-autocomplete>
      <v-text-field label="Your answer" variant="solo" v-model="FormData.answer"></v-text-field>
    </div>
    <div class="w-full">
      <label for="" class="text-primary-gray !mb-3"> Brand  </label>
      <v-autocomplete
        clearable
        chips
        label="Brand"
        variant="solo"
        v-model="FormData.brand"
      ></v-autocomplete>
    </div>
    <div class="w-full">
      <label for="" class="text-primary-gray !mb-3"> Transmission type  </label>
      <v-autocomplete
        clearable
        chips
        label="Transmission type"
        variant="solo"
        v-model="FormData.transmission"
      ></v-autocomplete>
    </div>
    <button class="bg-primary-color text-[#fff] px-10 py-2 rounded-xl" @click="submit"> Submit </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
const store = useStore();

const FormData = reactive({
  catg: null,
  subCatg: null,
  transmission: null,
  brand: null,
  process: null,
});

const rules = {
  catg: {
    required: helpers.withMessage("Category is required", required)
  },
  subCatg: {
    required: helpers.withMessage("Sub Category is required", required)
  },
};
const FormData$ = useVuelidate(rules, FormData);


const submit = async () => {
  try {
    const validateForm = await FormData$.value.$validate();
  } catch (error) {}
};
</script>

<style lang="scss" scoped></style>
