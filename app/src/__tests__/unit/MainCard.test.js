import { render, screen } from '@testing-library/react';
import MainCard from '../../components/MainCard/MainCard';



it('should render same text passed into props', () => {
  const testMsg='Test'
  const thirdTestMsg='3333'  
  const secondTestMsg='Test 2'
  const fourthTestMsg='Test 4'  

  render(<MainCard artist={testMsg} title={secondTestMsg} playcount={thirdTestMsg} img={fourthTestMsg}/>);

  const propsArtist = screen.getByText(testMsg);
  const propsTitle = screen.getByText(secondTestMsg);
  const propsPlaycount = screen.getByTitle('par', { name : thirdTestMsg});
  const propsImg = screen.getByRole("img")

  expect(propsArtist).toBeInTheDocument();
  expect(propsTitle).toBeInTheDocument();
  expect(propsPlaycount).toBeInTheDocument();
  expect(propsImg).toHaveAttribute("src",fourthTestMsg);

});


  

// describe("Checking if props are work proporely", () => {

//     it('should render same text passed into props', () => {
//         const testMsg='Test'
      
//         render(<MainCard artist={testMsg} />);
      
//         const propsArtist = screen.getByText(testMsg);
//         expect(propsArtist).toBeInTheDocument();
      
      
//       });
      
//       it('should render same text passed into prop', () => {
      
//         const secondTestMsg='Test 2'
      
//         render(<MainCard title={secondTestMsg} />);
      
//         const propsTitle = screen.getByText(secondTestMsg);
      
//         expect(propsTitle).toBeInTheDocument();
      
      
//       })
      
//       it('should render same text passed into prop', () => {
      
//           const thirdTestMsg='3333'
        
//           render(<MainCard playcount={thirdTestMsg} />);
        
//           const propsPlaycount = screen.getByTitle('par', { name : thirdTestMsg});
          
//           expect(propsPlaycount).toBeInTheDocument();
        
//         })
      
      
//         it('should render same text passed into prop', () => {
      
//           const fourthTestMsg='Test 4' 
        
//           render(<MainCard img={fourthTestMsg} />);
        
//           const propsImg = screen.getByRole("img")
        
//           expect(propsImg).toHaveAttribute("src",fourthTestMsg);
        
        
//         })
        

// })