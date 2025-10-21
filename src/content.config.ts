import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});


const services = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/services', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			title: z.string(),
			description: z.string(),
			benefitsTitle: z.string(),
			benefits: z.array(z.string()),
			heroImage:image().optional(),
			mainImage:image().optional(),
			image1:image().optional(),
			image2:image().optional(),
			image3:image().optional(),
			subServicesTitle: z.string().optional(),
			subServicesDescription: z.string().optional(),
			subServices: z.array(
				z.object({
					title: z.string(),
					description: z.string(),
				})
			).optional(),
			// pubDate: z.coerce.date(),
			// updatedDate: z.coerce.date().optional(),
			// Transform string to Date object
		
			IconImage: z.string(),
			faqs: z.array(
				z.object({
					question: z.string(),
					answer: z.string(),
				})
			)
		}),
});


const businesses = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/businesses', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			location: z.string(),
			// Transform string to Date object
			
		}),
});


const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			longName: z.string(),
			heroImage: image().optional(),
			image1: image().optional(),
			descriptionHeader: z.string(),			
			description: z.string(),
			overviewHeader: z.string(),
			overview: z.string(),
		
			galleryHeader: z.string(),
			galleryDescription: z.string(),
			overviewFeatures: z.array(z.string()).optional(),
			galleryImageMain: image().optional(),
			galleryImage2: image().optional(),
			galleryImage3: image().optional(),
			client: z.string(),
			budget: z.string(),
			location: z.string(),
			sector: z.string(),
			date: z.string(),
			// Transform string to Date object

		}),
});


const reviews = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/reviews', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			review: z.string(),
			clientImage: image().optional(),
			clientName: z.string(),
			clientDesignation: z.string(),
			// Transform string to Date object
			
		}),
});

export const collections = { blog:blog, services:services, projects:projects, businesses:businesses, reviews:reviews };

