import { render, screen } from '@testing-library/react';
import ArtistCard from '../components/ArtistCard/ArtistCard';

it('should render same text passed into props', () => {

    const testMsg='Test'

    /* So i set the image source similar to fetched data structure. So i can test it correctly. */
    const testArr = [{'text':"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"},{'text':"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"},{'text':"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"}]

    render(<ArtistCard image={testArr[1].text} name={testMsg} />);
  
    const propsArtist = screen.getByText(testMsg);
    const propsImg = screen.getByRole("img");

    expect(propsArtist).toBeInTheDocument();
    expect(propsImg).toHaveAttribute("src", "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png")
  
  });

  it('should render same text passed into props', () => {

    const testMsg='Test'

    /* In this test, i've tested currentArtist prop instead of name */
    
    render(<ArtistCard currentArtist={testMsg} />);
  
    const propsArtist = screen.getByText(testMsg);

    expect(propsArtist).toBeInTheDocument();
    
  
  });