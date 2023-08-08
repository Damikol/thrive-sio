import React, { useState } from 'react';
import * as Components from './Components';
import logoImage from './Assets/Logo.png';

function App() {
    const [signIn, toggle] = React.useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(null);
  const [formError, setFormError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Input Change - Name:', name, 'Value:', value);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';

    console.log('Form Data:', formData); // Add this line
    console.log('Form Errors:', errors); // Add this line

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormSuccess(null); // Clear success message
      setFormError(null); 
    } else {
      setFormErrors({});
      // Perform form submission logic here
      // For example, show success message:
      setFormSuccess('Form submitted successfully!');
      setFormError(null);
      // Or show error message:
      // setFormError('An error occurred while submitting the form.');
    }
  };
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form onSubmit={handleSubmit}>
                 <Components.LogoContainer>
                 <Components.Logo src={logoImage} alt="Logo" />
                 <Components.LogoText>Thrive</Components.LogoText>
                 </Components.LogoContainer>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input 
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange} required/>
                        {formErrors.name && <Components.ErrorMessage>{formErrors.name}</Components.ErrorMessage>}
                     <Components.Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}  required/>
                        {formErrors.email && <Components.ErrorMessage>{formErrors.email}</Components.ErrorMessage>}
                     <Components.Input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}  required/>
                        {formErrors.password && <Components.ErrorMessage>{formErrors.password}</Components.ErrorMessage>}
                     <Components.Button>Sign Up</Components.Button>
                     <Components.Anchor href='#'>Need help signing up ?</Components.Anchor>
                        {formError && <Components.ErrorMessage>{formError}</Components.ErrorMessage>}
                        {formSuccess && <Components.SuccessMessage>{formSuccess}</Components.SuccessMessage>}
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={handleSubmit}>
                  <Components.LogoContainer>
                  <Components.Logo src={logoImage} alt="Logo" />
                  <Components.LogoText>Thrive</Components.LogoText>
                  </Components.LogoContainer>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange} required/>
                        {formErrors.email && <Components.ErrorMessage>{formErrors.email}</Components.ErrorMessage>}
                      <Components.Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange} required/>
                        {formErrors.password && <Components.ErrorMessage>{formErrors.password}</Components.ErrorMessage>}
                      <Components.Button>Sigin In</Components.Button>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        {formError && <Components.ErrorMessage>{formError}</Components.ErrorMessage>}
                        {formSuccess && <Components.SuccessMessage>{formSuccess}</Components.SuccessMessage>}
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                 <Components.LogoContainer>
                 <Components.Logo src={logoImage} alt="Logo" />
                 <Components.LogoText>Thrive</Components.LogoText>
                 </Components.LogoContainer>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep you connected with us let's get you signed in with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     <Components.GhostButton onClick={() => toggle(true)}>
                     <Components.GoogleIcon />Continue with google
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                     <Components.LogoContainer>
                     <Components.Logo src={logoImage} alt="Logo" />
                     <Components.LogoText>Thrive</Components.LogoText>
                     </Components.LogoContainer>
                       <Components.Title>Hello!</Components.Title>
                       <Components.Paragraph>
                           Enter your personal details and let's get you started with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Create an account
                           </Components.GhostButton>
                           <Components.GhostButton onClick={() => toggle(false)}>
                           <Components.GoogleIcon />Sign up with Google
                           </Components.GhostButton>
                     </Components.RightOverlayPanel>

                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default App;