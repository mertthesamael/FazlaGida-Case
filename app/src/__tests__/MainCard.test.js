import { render, screen } from '@testing-library/react';
import MainCard from '../components/MainCard/MainCard';



it('should render same data passed into props', () => {
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

