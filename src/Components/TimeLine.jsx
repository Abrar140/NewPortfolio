import { Box, Typography, Card, CardContent } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Timeline = ({ data }) => {
  return (
    <Box sx={{ maxWidth: "900px", mx: "auto", position: "relative" }}>
      {/* Vertical line */}
      <Box
        sx={{
          position: "absolute",
          left: "20px",
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: "#333",
        }}
      />

      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 5,
            position: "relative",
          }}
        >
          {/* Dot */}
          <Box
            sx={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: "#f39c12",
              position: "absolute",
              left: "13px",
              top: "18px",
            }}
          />

          {/* Card */}
          <Card
            sx={{
              ml: 6,
              width: "100%",
              backgroundColor: "#1e1e1e",
              color: "#fff",
              borderRadius: "14px",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    backgroundColor: "#f39c12",
                    color: "#000",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {item.year}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 1,
                }}
              >
                <WorkOutlineIcon fontSize="small" sx={{ color: "#f39c12" }} />
                <Typography variant="body2" sx={{ color: "#f39c12" }}>
                  {item.university}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{ mt: 2, lineHeight: 1.7, color: "#ccc" }}
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default Timeline;



