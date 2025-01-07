export interface Database {
    public: {
      // Users table example
      users: {
        id: string;  // Unique identifier for the user (could be UUID)
        email: string;
        username: string | null; // username is optional (nullable)
        created_at: string; // Date string
      };
      
      // Posts table example
      posts: {
        id: string; // Unique identifier for the post
        title: string;
        content: string;
        user_id: string; // Foreign key referring to the user
        created_at: string;
      };
  
      // Comments table example
      comments: {
        id: string;
        content: string;
        post_id: string; // Foreign key referring to the post
        user_id: string; // Foreign key referring to the user
        created_at: string;
      };
    };
  }
  