import React, { useState } from "react";
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import axios from "axios";

const InterviewCard = ({ name, description, image, additionalInfo, onEdit, onDelete }) => (
  <div className="relative rounded-lg shadow-lg overflow-hidden group">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <div className="text-center">
        <p className="text-white px-4">{additionalInfo}</p>
        <Button onClick={onEdit} variant="secondary" className="mt-4">Edit</Button>
        <Button onClick={onDelete} variant="destructive" className="mt-2">Delete</Button>
      </div>
    </div>
  </div>
);

const initialInterviews = [
  {
    name: 'Little Red Riding Hood',
    description: 'Little Red Riding Hood is a European fairy tale about a young girl and a sly wolf.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Little%20Red%20Riding%20Hood.webp',
    additionalInfo: 'A classic tale about courage and cleverness in the face of danger.',
  },
  {
    name: 'Beauty and the Beast',
    description: 'Originating in France, this is the story of Belle, a beautiful peasant girl.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Beauty%20and%20the%20Beast.jpg',
    additionalInfo: 'A beautiful story about love and understanding beyond appearances.',
  },
    {
        name: 'The Frog Prince',
        description: 'The Frog Prince; or, Iron Henry" is a German fairy tale.',
        image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/The%20Frog%20Prince.jpg?updatedAt=1722176812593',
        additionalInfo: 'A story of transformation and keeping promises.',
      },
      {
        name: 'Cinderella',
        description: '"Cinderella", or "The Little Glass Slipper", is a folk tale with thousands of variants.',
        image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Cinderella.jpeg',
        additionalInfo: 'A timeless tale of kindness and unexpected fortunes.',
      },
      {
        name: 'Snow White',
        description: '"Snow White" is a German fairy tale, first written down in the early 19th century.',
        image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Snow%20White.webp',
        additionalInfo: 'A tale of envy and innocence with a magical twist.',
      },
      {
        name: 'Jack and the Beanstalk',
        description: 'Jack and the Beanstalk" is an English fairy tale.',
        image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Jack%20and%20the%20Beanstalk.jpg',
        additionalInfo: 'A daring adventure of bravery and cleverness.',
      },
      {
        name: 'Hansel and Gretel',
        description: 'A German fairy tale about two siblings who encounter a witch in the woods.',
        image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Haensel_und_Gretel-2.jpg',
        additionalInfo: 'A story of wit and survival against dark forces.',
      },
      {
        name: 'The Three Little Pigs',
        description: 'An English fairy tale about three pigs and a wolf who tries to blow their houses down.',
        image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/The-Three-Little-Pigs.webp',
        additionalInfo: 'A lesson in hard work and perseverance.',
      },
      {
        name: 'Rapunzel',
        description: 'A German fairy tale about a young girl with long golden hair trapped in a tower.',
        image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/432072.jpg',
        additionalInfo: 'A tale of rescue and love overcoming obstacles.',
      },
      {
        name: 'The Little Mermaid',
        description: 'A Danish fairy tale about a mermaid who dreams of becoming human.',
        image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/wp3151972.webp',
        additionalInfo: 'A story of sacrifice and yearning for a different life.',
      },
      {
        name: 'Sleeping Beauty',
        description: 'A classic fairy tale about a princess who falls into a deep sleep.',
        image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/wp2795999.jpg',
        additionalInfo: 'A tale of magic, curses, and true love’s kiss.',
      },
      {
        name: 'Rumpelstiltskin',
        description: 'A German fairy tale about a mysterious dwarf who helps a miller’s daughter spin straw into gold.',
        image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/e13e83b3d8f7861e51d2947d8f3bbb88.jpg',
        additionalInfo: 'A story about cleverness and the power of names.',
      },
];

const AdminStories = () => {
  const [visibleStories, setVisibleStories] = useState(5);
  const [open, setOpen] = useState(false);
  const [newStory, setNewStory] = useState({
    name: '',
    description: '',
    image: '',
    additionalInfo: '',
  });
  const [editingStory, setEditingStory] = useState(null);
  const [interviews, setInterviews] = useState(initialInterviews);

  const handleLoadMore = () => {
    setVisibleStories(interviews.length);
  };


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewStory((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddStory = async() => {
    const response = await axios.post("http://localhost:7777/stories/addstory",{
      name:newStory.name,
      description:newStory.description,
      storyJournal:newStory.additionalInfo,
    })
    if (editingStory) {
      setInterviews(
        interviews.map((story) =>
          story.name === editingStory.name ? newStory : story
        )
      );
      setEditingStory(null);
    } else {
      setInterviews([...interviews, newStory]);
    }
    setNewStory({ name: '', description: '', image: '', additionalInfo: '' });
    setOpen(false);
  };


  const handleEditStory = (story) => {
    setEditingStory(story);
    setNewStory(story);
    setOpen(true);
  };

  const handleDeleteStory = (name) => {
    setInterviews(interviews.filter((story) => story.name !== name));
  };


  return (
    <>
      <section
        id="client-section"
        className="py-8 relative"
        style={{ backgroundImage: "url('../image/background2.jpg')" }}
      >
        <hr />
        <br />
        <h1 className="text-5xl font-bold text-center mb-12">Stories</h1>
        <div className="container mx-auto p-6">
          <Button onClick={() => setOpen(true)} variant="default" className="mb-4">
            <Plus className="mr-2 h-4 w-4" /> Add New Story
          </Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviews.slice(0, visibleStories).map((interview, index) => (
              <InterviewCard
                key={index}
                name={interview.name}
                description={interview.description}
                image={interview.image}
                additionalInfo={interview.additionalInfo}
                onEdit={() => handleEditStory(interview)}
                onDelete={() => handleDeleteStory(interview.name)}
              />
            ))}
          </div>
          {visibleStories < interviews.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Load more stories
              </button>
            </div>
          )}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                {editingStory ? 'Edit Story' : 'Add New Story'}
              </SheetTitle>
              <SheetClose />
            </SheetHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newStory.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newStory.description}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={newStory.image}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="additionalInfo">Additional Info</Label>
                <Input
                  id="additionalInfo"
                  value={newStory.additionalInfo}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <br/>
            <SheetFooter>
              <Button onClick={handleAddStory}>
                {editingStory ? 'Update Story' : 'Add Story'}
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default AdminStories;

