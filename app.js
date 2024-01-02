const express = require('express')
const app = express()
const port = 3000;

const studentModel = require('./users'); 


app.get('/',async (req, res) => {
    try {
      const allStudents = await studentModel.find({});
    // Create a new PDF document
    // const doc = new PDFDocument();
    // const outputFile = 'all_students.pdf';
    // const stream = fs.createWriteStream(outputFile);
  
    // Write data to the PDF
    // doc.pipe(stream);
    // doc.fontSize(12).text('All Students\n\n');
  
    // Iterate through each student and format their data
    // allStudents.forEach((student, index) => {
    //   doc.text(`Student ${index + 1}:`);
    //   doc.moveDown();
  
    //   doc.text(`Name: ${student.name}`);
    //   doc.text(`ID: ${student.studentId}`);
    //   doc.text(`Class: ${student.className}`);
    //   doc.text(`Attendance: ${student.attendance}%`);
  
    //   doc.moveDown();
    //   doc.text('---------------------------'); // Separator between students
    //   doc.moveDown();
    // });
  
    // doc.end();
  
    // console.log(`Data written to ${outputFile}`);
    // res.download(outputFile); //
  
      // res.render('studentData', { students: allStudents}); // Render 'index.ejs' and pass fetched data
    res.send(allStudents);
    
    
    } catch (err) {
      console.error('Error fetching student data:', err);
      res.status(500).send('Error fetching student data');
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})