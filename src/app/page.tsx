"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [project, setProject] = useState<any[]>([]); // Update state to hold an array
  const fetchProject = async () => {
    try {
      const response = await fetch("/api/project");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setProject(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    

    fetchProject();
  }, []);

  return (
    <>
      <section>
        <img src="/static/bg_1.jpg" alt="" />
      </section>
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </>
  );
}
