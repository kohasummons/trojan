import { useEffect, useState } from "react";

export const useGetSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch("/api/schedule");
      const data = await response.json();
      setSchedule(data);
    };
    fetchSchedule();
  }, []);

  return schedule;
};
