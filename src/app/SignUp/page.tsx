// "use client";
// import React, { useState, FormEvent } from "react";

// interface FormState {
//   name: string;
//   email: string;
//   password: string;
// }

// const SignUp: React.FC = () => {
//   const [form, setForm] = useState<FormState>({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState<Partial<FormState>>({});
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <div>
//       <h1 style={{ marginBottom: 12 }}>Create an account</h1>

//       {submitted && (
//         <div style={{ marginBottom: 12, color: "green" }}>
//           Account created (simulated). Check console for submitted data.
//         </div>
//       )}

//       <form onSubmit={handleSubmit} noValidate>
//         <label style={{ display: "block", marginBottom: 8 }}>
//           <div style={{ fontSize: 14 }}>Name</div>
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Your name"
//             aria-invalid={!!errors.name}
//             style={{ width: "100%", padding: 8, marginTop: 6 }}
//           />
//           {errors.name && (
//             <div style={{ color: "red", marginTop: 6 }}>{errors.name}</div>
//           )}
//         </label>

//         <label style={{ display: "block", margin: "12px 0" }}>
//           <div style={{ fontSize: 14 }}>Email</div>
//           <input
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="you@example.com"
//             aria-invalid={!!errors.email}
//             style={{ width: "100%", padding: 8, marginTop: 6 }}
//           />
//           {errors.email && (
//             <div style={{ color: "red", marginTop: 6 }}>{errors.email}</div>
//           )}
//         </label>

//         <label style={{ display: "block", marginBottom: 12 }}>
//           <div style={{ fontSize: 14 }}>Password</div>
//           <input
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="••••••••"
//             aria-invalid={!!errors.password}
//             style={{ width: "100%", padding: 8, marginTop: 6 }}
//           />
//           {errors.password && (
//             <div style={{ color: "red", marginTop: 6 }}>{errors.password}</div>
//           )}
//         </label>

//         <button
//           type="submit"
//           style={{ padding: "10px 16px", cursor: "pointer" }}
//         >
//           Sign up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
