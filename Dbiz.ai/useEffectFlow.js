
  //In what sequence will this run and why

// If there are any changes in the state how would this get modified

useEffect(() => {
  console.log("one");
}, []);

useEffect(() => {
  console.log("two");
});

useEffect(() => {
  console.log("three");
  return () => {
      console.log("clean up of three");
  };
});

//output

// one
// two
// three
// clean up of three


    
    
    
