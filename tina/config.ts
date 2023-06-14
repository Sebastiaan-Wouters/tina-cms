import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "bafb982d-604f-4af4-b56a-19ec635d4aff", // Get this from tina.io
  token: "dd7129f944f25fa7a15af4f2d97ac3afa6632422", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: 'Organoids',
        name: 'organoids',
        path: 'content/organoids',
        fields: [
          { label: 'Name', name: 'name', type: 'string' },
          { label: 'Description', name: 'description', type: 'rich-text' },
          { label: 'Picture', name: 'picture', type: 'image' },
          {
            label: 'Research Items',
            name: 'researchItems',
            type: 'reference',
            collections: ['researchItems']
          }
        ],
      },
      {
        label: 'Research Items',
        name: 'researchItems',
        path: 'content/researchItems',
        fields: [
          { label: 'Title', name: 'title', type: 'string' },
          { label: 'Description', name: 'description', type: 'rich-text' },
          { label: 'Picture', name: 'picture', type: 'image' },
          { label: 'Url', name: 'url', type: 'string' },
          {
            label: 'Researchers',
            name: 'researchers',
            type: 'reference',
            collections: ['researchers']
          },
        ],
      },
      {
        label: 'Researchers',
        name: 'researchers',
        path: 'content/researchers',
        fields: [
          { label: 'Name', name: 'name', type: 'string' },
          { label: 'Description', name: 'description', type: 'rich-text' },
          { label: 'Picture', name: 'picture', type: 'string' },
          { label: 'Url', name: 'url', type: 'string' },
          { label: 'Profile Picture', name: 'profile_pic', type: 'image' }
        ],
      },
    ],
  },
});
