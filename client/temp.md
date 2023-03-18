<Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          mt: 2,
        }}
      >
        <FormControl variant="outlined">
          <OutlinedInput
            sx={{
              borderColor: "#7a757f",
              backgroundColor: "#e7e0eb",
            }}
            role="textbox"
            placeholder="place url here"
            aria-placeholder="place url here"
            size="large"
            onChange={(e) => setUrl(e.target.value)}
            id="url-text"
          />
        </FormControl>
        <Button
          tabIndex={0}
          aria-pressed="false"
          role="button"
          variant="contained"
          sx={{
            height: "56px",
            backgroundColor: "#7331df",
            textTransform: "none",
            color: "#ffffff",
            mt: 2,
          }}
          onClick={handleCallback}
          // disabled={!validUrl(url)}
        >
          Test Url
        </Button>
      </Box>
      <Box sx={{ display: { xs: "column", md: "none" } }}>
        {loading && (
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "purple",
                p: 1,
                width: "100%",
                borderRadius: 1,
                mt: 2,
                color: "#FFFFFF",
              }}
            >
              <CircularProgress sx={{ mr: 2, color: "#FFFFFF" }} />{" "}
              <span> {"  "} Processing....</span>
            </Box>
          </Box>
        )}
      </Box>