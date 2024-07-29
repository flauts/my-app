import React, { createContext, useContext, useState, ReactNode } from "react";

type Post = {
  id: number;
  user: string;
  title: string;
  description: string;
  images: {
    url: string[];
  };
};

type PostContextType = {
  posts: Post[];
  updatePosts: (newPosts: Post[]) => void;
};

const PostContext = createContext<PostContextType | undefined>(undefined);

type PostProviderProps = {
  children: ReactNode;
};

export function PostContextProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  const updatePosts = (newPosts: Post[]) => {
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
  };

  return (
    <PostContext.Provider value={{ posts, updatePosts }}>
      {children}
    </PostContext.Provider>
  );
}
export function usePostContext() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
}
