import React, { useState } from "react";
import {
  Text,
  View,
  Alert,
  Switch,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// Components
import CustomInput from "../components/CustomInput";
import SubmitButton from "../components/SubmitButton";
import RadioGroup from "../components/RadioGroup";
import CustomDropdown from "../components/CustomDropdown";

// Styles
import globalStyles from "../styles/globalStyles";

// VALIDATION SCHEMA (No password now!)
const formSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^\d{11}$/, "Phone must be 11 digits")
    .required("Phone is required"),

  age: Yup.number()
    .min(1, "Invalid age")
    .max(100, "Too old")
    .required("Age is required"),

  address: Yup.string()
    .min(5, "Address too short")
    .required("Address required"),

  gender: Yup.string().required("Select gender"),
  country: Yup.string().required("Select country"),

  agree: Yup.boolean()
    .oneOf([true], "You must agree to the terms")
    .required(),
});

export default function AdvancedFormScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#cee7f3ff" }}>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={globalStyles.title}>User Information Form</Text>

        <View style={globalStyles.card}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              age: "",
              address: "",
              gender: "",
              country: "",
              agree: false,
            }}
            validationSchema={formSchema}
            onSubmit={(values, { resetForm }) => {
  setLoading(true);

  setTimeout(() => {
    setLoading(false);

    Alert.alert(
      "🎉 Form Submitted Successfully",
      "Your information has been recorded successfully!"
    );

    resetForm();
  }, 1500);
}}

          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
              resetForm,
            }) => (
              <View>

                {/* NAME */}
                <Text style={globalStyles.label}>Full Name</Text>
                <CustomInput
                  placeholder="Enter your name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <Text style={globalStyles.error}>{errors.name}</Text>
                )}

                {/* EMAIL */}
                <Text style={globalStyles.label}>Email</Text>
                <CustomInput
                  placeholder="example@gmail.com"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={globalStyles.error}>{errors.email}</Text>
                )}

                {/* PHONE */}
                <Text style={globalStyles.label}>Phone Number</Text>
                <CustomInput
                  placeholder="03XXXXXXXXX"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
                {touched.phone && errors.phone && (
                  <Text style={globalStyles.error}>{errors.phone}</Text>
                )}

                {/* AGE */}
                <Text style={globalStyles.label}>Age</Text>
                <CustomInput
                  placeholder="Enter age"
                  onChangeText={handleChange("age")}
                  onBlur={handleBlur("age")}
                  value={values.age}
                />
                {touched.age && errors.age && (
                  <Text style={globalStyles.error}>{errors.age}</Text>
                )}

                {/* ADDRESS */}
                <Text style={globalStyles.label}>Address</Text>
                <CustomInput
                  placeholder="Street / City / House No."
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                />
                {touched.address && errors.address && (
                  <Text style={globalStyles.error}>{errors.address}</Text>
                )}

                {/* GENDER */}
                <Text style={globalStyles.label}>Gender</Text>
                <RadioGroup
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                  ]}
                  selected={values.gender}
                  onChange={(val) => setFieldValue("gender", val)}
                />
                {touched.gender && errors.gender && (
                  <Text style={globalStyles.error}>{errors.gender}</Text>
                )}

                {/* COUNTRY */}
                <Text style={globalStyles.label}>Country</Text>
                <CustomDropdown
                  options={["Pakistan", "India", "UAE", "USA"]}
                  value={values.country}
                  onSelect={(val) => setFieldValue("country", val)}
                />
                {touched.country && errors.country && (
                  <Text style={globalStyles.error}>{errors.country}</Text>
                )}

                {/* TERMS SWITCH */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Switch
                    value={values.agree}
                    onValueChange={(val) => setFieldValue("agree", val)}
                  />
                  <Text style={{ marginLeft: 10 }}>I agree to the terms</Text>
                </View>

                {touched.agree && errors.agree && (
                  <Text style={globalStyles.error}>{errors.agree}</Text>
                )}

                {/* SUBMIT BUTTON */}
                <SubmitButton
                  title={loading ? "Submitting..." : "Submit"}
                  onPress={handleSubmit}
                />

                {/* RESET BUTTON */}
                <SubmitButton
                  title="Reset"
                  onPress={resetForm}
                  color="#475569"
                  style={{ marginTop: 10 }}
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}
