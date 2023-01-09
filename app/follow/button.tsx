"use client";

import { useState, useEffect, useRef } from "react";

const FollowButton = ({ fetchTime }: { fetchTime: number }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const following = useRef(false);

  const [loading, setLoading] = useState(false);

  const follow = () => {
    setLoading(true);
    setTimeout(() => {
      following.current = !following.current;
      setLoading(false);
    }, fetchTime);
  };

  // Label
  useEffect(() => {
    const button = buttonRef.current;

    if (button) {
      if (loading) {
        let dots = 0;
        let way = "up";
        const interval = setInterval(() => {
          if (way === "up") {
            dots++;
          } else {
            dots--;
          }

          if (dots === 3) {
            way = "down";
          } else if (dots === 0) {
            way = "up";
          }

          button.innerText = ".".repeat(dots);
        }, 500);

        return () => {
          clearInterval(interval);
          dots = 1;
          way = "up";
        };
      } else {
        button.innerText = following.current ? "Following" : "Follow";
      }
    }
  }, [loading]);

  // Color
  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.className = "border font-bold rounded-full w-32 h-8";

      const loadingClasses = [
        "bg-zinc-200",
        "border-zinc-400",
        "text-zinc-900",
      ];

      const followingClasses = ["bg-white", "border-zinc-500", "text-zinc-900"];

      const notFollowingClasses = [
        "bg-zinc-900",
        "border-zinc-900",
        "text-white",
      ];

      let initialClasses: string[] = [];
      let finalClasses: string[] = [];

      if (loading) {
        initialClasses = following.current
          ? followingClasses
          : notFollowingClasses;

        finalClasses = loadingClasses;
      } else {
        initialClasses = loadingClasses;

        finalClasses = following.current
          ? followingClasses
          : notFollowingClasses;
      }

      button.classList.add(...initialClasses);
      button.classList.add("transition-colors", "duration-500");
      button.classList.add(...finalClasses);
      button.classList.remove(...initialClasses);
    }
  }, [loading]);

  // Hover
  useEffect(() => {
    const button = buttonRef.current;

    if (button && !loading) {
      let hoverClasses: string[] = [];

      const getHoverClasses = () => {
        hoverClasses = following.current
          ? ["bg-red-100", "border-red-500", "text-red-500"]
          : ["bg-zinc-700", "border-zinc-800"];
      };

      const handleMouseEnter = () => {
        getHoverClasses();
        button.classList.add(...hoverClasses);
        button.innerText = following.current ? "Unfollow" : "Follow";
      };

      const handleMouseLeave = () => {
        getHoverClasses();
        button.classList.remove(...hoverClasses);
        button.innerText = following.current ? "Following" : "Follow";
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [loading]);

  return <button disabled={loading} ref={buttonRef} onClick={follow} />;
};

export default FollowButton;
