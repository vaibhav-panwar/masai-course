<h1>Air Ticket Booking</h1>
<h3> Deployed Link </h3>
<a href = "https://airline-cipd.onrender.com">https://airline-cipd.onrender.com</a>
<h3>User Routes</h3>
<h4>register</h4>
<a href = "https://airline-cipd.onrender.com">https://airline-cipd.onrender.com/api/register">
</a>
<p>request paramenters</p>
<p>
  {<br/>
  name,<br/>
  email(unique),<br/>
  password<br/>
  }
</p>
<p>Output</p>
<p>
  {<br/>
  isError:false<br/>
  message:"user registered successfully"<br/>
  data(user details)<br/>
  }
</p>
<h4>login</h4>
<a href = "https://airline-cipd.onrender.com">https://airline-cipd.onrender.com/api/login">
</a>
<p>request paramenters</p>
<p>
  {<br/>
  email(unique),<br/>
  password<br/>
  }
</p>
<p>Output</p>
<p>
  {<br/>
  isError:false<br/>
  message:"user login successfully"<br/>
  token(user token)<br/>
  }
</p>
<h3>User Routes</h3>
<h4>flight details</h4>
<a href = "https://airline-cipd.onrender.com">https://airline-cipd.onrender.com/api/flights">
</a>
<p>Output</p>
<p>
  {<br/>
  isError:false<br/>
  data(flight details)<br/>
  }
</p>
