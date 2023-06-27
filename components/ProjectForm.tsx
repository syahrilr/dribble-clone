'use client'

import { SessionInterface } from "@/commont.types";
import Image from "next/image";
import { ChangeEvent } from "react";
import FormField from "./FormField";

type Props = {
  type: string;
  session: SessionInterface;
};

const ProjectForm = ({ type, session }: Props) => {

  const handleFormSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleStateChange = (fieldName: string, value: string) => {

  }

  const form = {
    image: '',
    title: '',
    description: '',
    liveSiteUrl: '',
    githubUrl: '',
  }

  return (
  <form 
    onSubmit={handleFormSubmit}
    className="flexStart form"
  >
    <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
            {!form.image && 'Choose a poster for your project'}
        </label>
        <input 
            id="image"
            type="file"
            accept="image/*"
            required={type == 'create'}
            className="form_image-input"
            onChange={handleChangeImage}
        />
        {form.image && (
            <Image 
                src={form?.image}
                className="sm:p-10 object-contain z-20"
                alt="Project poster"
                fill
            />
        )}
    </div>

    <FormField 
        title="Title"
        state={form.title}
        placeholder="Flexibble"
        setState={(value) => handleStateChange('title', value)}
    />
    <FormField 
        title="Desciption"
        state={form.description}
        placeholder="Showcase and discover remakable developler projects."
        setState={(value) => handleStateChange('description', value)}
    />
    <FormField 
        type="url"
        title="Website URL"
        state={form.liveSiteUrl}
        placeholder="https://example.com"
        setState={(value) => handleStateChange('liveSiteUrl', value)}
    />
    <FormField 
        type="url"
        title="GitHub URL"
        state={form.githubUrl}
        placeholder="https://github.com/syahrilr"
        setState={(value) => handleStateChange('githubUrl', value)}
    />

    {/* Custom Input Category... */}

    <div>

    </div>

  </form>
  )
};

export default ProjectForm;
